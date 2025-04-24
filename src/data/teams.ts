
export interface Team {
  id: string;
  name: string;
  logo: string;
  league: string;
}

export const teams: Team[] = [
  // Premier League
  { id: "arsenal", name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", league: "Premier League" },
  { id: "chelsea", name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", league: "Premier League" },
  { id: "liverpool", name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png", league: "Premier League" },
  { id: "man_city", name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png", league: "Premier League" },
  { id: "man_utd", name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png", league: "Premier League" },
  { id: "tottenham", name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png", league: "Premier League" },
  
  // La Liga
  { id: "real_madrid", name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png", league: "La Liga" },
  { id: "barcelona", name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png", league: "La Liga" },
  { id: "atletico", name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png", league: "La Liga" },
  
  // Bundesliga
  { id: "bayern", name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png", league: "Bundesliga" },
  { id: "dortmund", name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png", league: "Bundesliga" },
  { id: "leipzig", name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png", league: "Bundesliga" },
  
  // Serie A
  { id: "juventus", name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png", league: "Serie A" },
  { id: "milan", name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png", league: "Serie A" },
  { id: "inter", name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png", league: "Serie A" },
  
  // Ligue 1
  { id: "psg", name: "Paris Saint-Germain", logo: "https://media.api-sports.io/football/teams/85.png", league: "Ligue 1" },
  { id: "marseille", name: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png", league: "Ligue 1" },
  { id: "monaco", name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png", league: "Ligue 1" }
];
