import request from '@/utils/request'

// 注册
export const register = (data: any) => request.post('/app/register', data)

// 登录
export const login = (data: any) => request.post('/app/login', data)

// 获取严重吗
export const sendValidCode = (data: any) => request.post('/app/sendValidCode', data)

// 获取严重吗
export const createNewCampaign = (data: any) => request.post('/app/createNewCampaign', data)

// 获取用户基本信息
export const queryBasicUserInfo = () => request.post('/app/queryBasicUserInfo')