import { FOOTBALL_DATA_API_KEY, FOOTBALL_DATA_API_URL } from '@/config/api';
import { teams as fallbackTeams } from '@/data/teams';

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
      // If API fails, return the fallback teams for that league
      const leagueTeams = fallbackTeams.filter(team => 
        team.league === (
          league === 'PL' ? 'Premier League' :
          league === 'PD' ? 'La Liga' :
          league === 'BL1' ? 'Bundesliga' :
          league === 'SA' ? 'Serie A' :
          league === 'FL1' ? 'Ligue 1' : 'Other'
        )
      );
      return { data: { teams: leagueTeams } };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching teams:', error);
    // Return fallback teams on error
    const leagueTeams = fallbackTeams.filter(team => 
      team.league === (
        league === 'PL' ? 'Premier League' :
        league === 'PD' ? 'La Liga' :
        league === 'BL1' ? 'Bundesliga' :
        league === 'SA' ? 'Serie A' :
        league === 'FL1' ? 'Ligue 1' : 'Other'
      )
    );
    return { data: { teams: leagueTeams }, error: 'Failed to fetch teams' };
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
