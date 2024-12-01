import { Player } from "../players/player";
import { Tournament } from "../tournaments/tournament";

export type Solicitation = {
  id: string;
  account: Player;
  tournament: Tournament;
  status: string;
  answers: any[];
};
