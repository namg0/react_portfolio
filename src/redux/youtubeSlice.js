import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchYoutube = createAsyncThunk(
	'youtube/requestYoutube',
	async () => {
		const key = 'AIzaSyBLdlm9RlOXSuE2ACgPflc0wFh_G0MgGRs';
		const playlist = 'PLPBzlS6qg86eT7iAEa99MnLYoUpl5PzVZ';
		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		const response = await axios.get(url);
		return response.data.items;
	}
);

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});
export default youtubeSlice.reducer;
