import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface LeadData {
  customerName: string;
  customerEmail: string;
  customerMobile: string;
  customerComment?: string;
  label: string;
}

interface LeadState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: LeadState = {
  loading: false,
  success: false,
  error: null,
};

export const submitLead = createAsyncThunk(
  'lead/submit',
  async (leadData: LeadData) => {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead');
    }

    return await response.json();
  }
);

const leadSlice = createSlice({
  name: 'lead',
  initialState,
  reducers: {
    resetLead: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitLead.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to submit lead';
      });
  },
});

export const { resetLead } = leadSlice.actions;
export default leadSlice.reducer;