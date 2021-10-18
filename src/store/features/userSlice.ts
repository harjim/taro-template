import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { about } from 'service/api'

const initialState = {
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 导出为 actions
    increment(state, { payload }) {
      state.count = state.count + payload.step
    },
  },
  extraReducers: (builder) => {
    // 异步 actions 中触发与其他 slice 中数据的关联改变
    builder.addCase(userInfo.pending, (state) => {
      console.log('pending', state)
    })
    builder.addCase(userInfo.fulfilled, (state, { payload }) => {
      state.count = payload.data.count
    })
    builder.addCase(userInfo.rejected, (state, err) => {
      console.log(state, err)
    })
  },
})

export const userInfo = createAsyncThunk('user/userInfo', async () => {
  return await about() // 返回的结果在 `.fulfilled` 中作为 `payload` 的值
})

export const { increment } = userSlice.actions

export default userSlice.reducer // 导出 reducer
