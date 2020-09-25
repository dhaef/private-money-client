import { createSlice, createAsyncThunk/*,  current*/ } from '@reduxjs/toolkit'
import api from 'api'
import { requestStatus } from 'globalConstants'
import { logFetchResults } from 'lib/logFetchResults'

// @ts-ignore
// eslint-disable-next-line
import { blue, yellow } from 'logger'

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

export const fetchCriteriaResults = createAsyncThunk(
  'criteriaResult/get',
  async (criteria) => {
    yellow('fetchCriteriaResults: criteria', criteria)
    const r = await api.transactions.read(criteria)
    return r
  }
)

const criteriaResultsSlice = createSlice({
  name: 'criteriaResult',
  initialState,
  reducers: {
    criteriaResultsClear(state, action) {
      blue('criteriaResultsClear')
      state.items = []
    }
  },
  extraReducers: {
    // @ts-ignore
    [fetchCriteriaResults.pending]: (state, action) => {
      logFetchResults('fetchCriteriaResults.pending', state, action)
      state.status = requestStatus.pending
      state.items = []
    },
    // @ts-ignore
    [fetchCriteriaResults.fulfilled]: (state, action) => {
      logFetchResults('fetchCriteriaResults.fulfilled', state, action)
      state.status = requestStatus.fulfilled
      state.items = action.payload.data
    },
    // @ts-ignore
    [fetchCriteriaResults.rejected]: (state, action) => {
      logFetchResults('fetchCriteriaResults.rejected', state, action)
      state.status = requestStatus.error
      state.error = action.error.message
      state.items = []
    }  
  }
})

export default criteriaResultsSlice.reducer

export const { criteriaResultsClear } = criteriaResultsSlice.actions

export const selectCriteriaResults = state => state.criteriaResults.items