import request from '@/utils/request'

// 注册
export const register = (data: any) => request.post('/app/register', data)
