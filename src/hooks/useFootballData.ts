
import { useQuery } from '@tanstack/react-query';
import { fetchTeams, fetchMatches } from '@/services/footballDataService';

export const useTeams = (league: string) => {
  return useQuery({
    queryKey: ['teams', league],
    queryFn: () => fetchTeams(league),
  });
};

export const useMatches = (teamId: string) => {
  return useQuery({
    queryKey: ['matches', teamId],
    queryFn: () => fetchMatches(teamId),
  });
};
