
import { FOOTBALL_DATA_API_KEY, FOOTBALL_DATA_API_URL } from '@/config/api';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const headers = {
  'X-Auth-Token': FOOTBALL_DATA_API_KEY,
};

export const fetchTeams = async (league: string): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${FOOTBALL_DATA_API_URL}/competitions/${league}/teams`, {
      headers,
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch teams');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching teams:', error);
    return { data: null, error: 'Failed to fetch teams' };
  }
};

export const fetchMatches = async (teamId: string): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${FOOTBALL_DATA_API_URL}/teams/${teamId}/matches`, {
      headers,
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch matches');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching matches:', error);
    return { data: null, error: 'Failed to fetch matches' };
  }
};
