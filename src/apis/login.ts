import request from '@/utils/request'

// 注册
export const register = (data: any) => request.post('/app/register', data)

// 登录
export const login = (data: any) => request.post('/app/login', data)

// 获取严重吗
export const sendValidCode = (data: any) => request.post('/app/sendValidCode', data)