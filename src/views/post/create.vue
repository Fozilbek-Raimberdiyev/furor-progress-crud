<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { FormItem, Form } from 'ant-design-vue'
import { reactive, ref, toRaw } from 'vue'
import type { UnwrapRef } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseInput from '@/components/BaseInput/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect/BaseSelect.vue'
import { createPost, getUsers } from '@/services/post/post.service'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { showSuccessToast } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const { data: users } = useQuery({
  queryKey: ['users'],
  queryFn: () => getUsers(),
  select: (data) =>
    data.data?.map((user: { name: string; id: number }) => ({
      label: user.name,
      value: user.id,
    })),
})
const { mutate, isPending } = useMutation({
  mutationKey: ['createPost'],
  mutationFn: (body: { title: string; body: string; userId: number | undefined }) =>
    createPost(body),
  onSuccess: () => {
    showSuccessToast('Post muvaffaqiyatli yaratildi')
    router.push('/posts')
    resetForm()
  },
})
interface FormState {
  title: string
  body: string
  userId: number | undefined
}
const formRef = ref()
const labelCol = { span: 5 }
const wrapperCol = { span: 13 }
const formState: UnwrapRef<FormState> = reactive({
  body: '',
  title: '',
  userId: undefined as number | undefined,
})
const rules: Record<string, Rule[]> = {
  title: [{ required: true, message: 'Sarlavha kiritilishi shart', trigger: 'blur' }],
  body: [{ required: true, message: 'Matn kiritilishi shart', trigger: 'blur' }],
  userId: [{ required: true, message: 'Foydalanuvchi ID kiritilishi shart', trigger: 'blur' }],
}
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      const body = toRaw(formState)
      mutate(body)
    })
    .catch((error: unknown) => {
      console.log('error', error)
    })
}
const resetForm = () => {
  formRef.value.resetFields()
}
</script>
<template>
  <div>
    <div class="flex gap-4 items-center mb-10">
      <BaseButton @click="$router.go(-1)" type="default">Orqaga</BaseButton>
      <h1 class="text-2xl font-bold">Maqola yaratish</h1>
    </div>

    <Form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <FormItem ref="title" name="title">
        <label for="title">Sarlavha</label>
        <BaseInput id="title" v-model="formState.title" />
      </FormItem>
      <FormItem name="body">
        <label for="body">Matn</label>
        <BaseInput v-model="formState.body" type="text"></BaseInput>
      </FormItem>
      <FormItem required name="userId">
        <label for="userId">Foydalanuvchini tanlang</label>
        <BaseSelect :options="users" v-model="formState.userId"></BaseSelect>
      </FormItem>
      <FormItem :wrapper-col="{ span: 14, offset: 4 }">
        <BaseButton :loading="isPending" type="primary" @click="onSubmit">Yaratish</BaseButton>
        <BaseButton style="margin-left: 10px" @click="resetForm">Tozalash</BaseButton>
      </FormItem>
    </Form>
  </div>
</template>

<style scoped>
:global(.ant-form-item) {
  margin-bottom: 16px;
}
</style>
