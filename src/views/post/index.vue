<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Popconfirm } from 'ant-design-vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { useRouteQuery } from '@vueuse/router'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import { getPosts, deletePost } from '@/services/post/post.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { computed, ref } from 'vue'
import { showInfoToast, showSuccessToast } from '@/utils'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
const client = useQueryClient()
const columns = [
  { title: 'Sarlavha', dataIndex: 'title', key: 'title' },
  { title: 'Matn', dataIndex: 'body', key: 'body', ellipsis: true },
  { title: 'Foydalanuvchi idsi', dataIndex: 'userId', key: 'userId' },
  { title: 'Amallar', dataIndex: 'actions', key: 'actions' },
]
const page = useRouteQuery('page', 1, { transform: Number })
const total = ref(100)
const limit = ref(20)
const { data, isFetching } = useQuery({
  queryKey: ['posts', computed(() => page.value)],
  queryFn: () => getPosts({ _page: page.value, _limit: limit.value }),
  select: (data) => data.data,
})
const { mutate } = useMutation({
  mutationKey: ['deletePost'],
  mutationFn: (id: number) => deletePost(id),
  onSuccess: () => {
    client.invalidateQueries({ queryKey: ['posts'] })
    showSuccessToast("Maqola muvaffaqiyatli o'chirildi")
  },
})
</script>

<template>
  <div>
    <pre>
      <!-- {{ data }} -->
    </pre>
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold">Maqolalar</h1>
      <BaseButton @click="$router.push('/posts/create')" type="primary">Maqola qo'shish</BaseButton>
    </div>
    <BaseTable :current-page="page" :limit="10" :data-source="data" :loading="isFetching" :columns>
      <template #bodyCell="{ column, record }">
        <div class="flex gap-1" v-if="column.key === 'actions'">
          <BaseButton @click="$router.push(`/posts/update/${record.id}`)" type="default">
            <BaseIcon name="EditIcon"></BaseIcon>
          </BaseButton>
          <Popconfirm
            title="Maqolani o'chirmoqchimisiz?"
            ok-text="Ha"
            cancel-text="Yo'q"
            @confirm="mutate(record.id)"
            @cancel="showInfoToast('Tasdiqlanmadi')"
            ><BaseButton type="default">
              <BaseIcon name="RemoveIcon"></BaseIcon>
            </BaseButton>
          </Popconfirm>
        </div>
      </template>
    </BaseTable>
    <div class="mt-1">
      <BasePagination :page-size="limit" :total v-model="page"></BasePagination>
    </div>
  </div>
</template>

<style scoped></style>
