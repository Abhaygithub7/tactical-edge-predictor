
interface TeamStats {
  form: string[];
  isHome: boolean;
}

export const calculateWinProbability = (team: TeamStats): number => {
  // Convert form to points (W=3, D=1, L=0)
  const formPoints = team.form.reduce((total, result) => {
    switch (result) {
      case 'W': return total + 3;
      case 'D': return total + 1;
      case 'L': return total + 0;
      default: return total;
    }
  }, 0);

  // Calculate form strength (max possible points = 15)
  const formStrength = formPoints / 15;

  // Add home advantage if applicable
  const homeAdvantage = team.isHome ? 0.1 : 0;

  // Combine factors (60% form, 40% home advantage)
  return (formStrength * 0.6) + (homeAdvantage * 0.4);
};

export const predictMatch = (
  team1: TeamStats,
  team2: TeamStats
): { team1Probability: number; team2Probability: number; draw: number } => {
  const team1Strength = calculateWinProbability(team1);
  const team2Strength = calculateWinProbability(team2);
  
  // Calculate relative strengths
  const totalStrength = team1Strength + team2Strength;
  const team1Probability = team1Strength / totalStrength * 0.8; // 80% of probability split between teams
  const team2Probability = team2Strength / totalStrength * 0.8;
  const draw = 0.2; // 20% chance of draw

  return {
    team1Probability,
    team2Probability,
    draw
  };
};
