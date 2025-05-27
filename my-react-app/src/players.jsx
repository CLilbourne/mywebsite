import React from "react";

const OffensivePlayersTable = () => {
  const players = [
    { name: "Patrick Mahomes", team: "Kansas City Chiefs", role: "QB" },
    { name: "Josh Allen", team: "Buffalo Bills", role: "QB" },
    { name: "Joe Burrow", team: "Cincinnati Bengals", role: "QB" },
    { name: "Justin Herbert", team: "Los Angeles Chargers", role: "QB" },
    { name: "Jalen Hurts", team: "Philadelphia Eagles", role: "QB" },
    { name: "Christian McCaffrey", team: "San Francisco 49ers", role: "RB" },
    { name: "Derrick Henry", team: "Baltimore Ravens", role: "RB" },
    { name: "Saquon Barkley", team: "Philadelphia Eagles", role: "RB" },
    { name: "Josh Jacobs", team: "Green Bay Packers", role: "RB" },
    { name: "Bijan Robinson", team: "Atlanta Falcons", role: "RB" },
    { name: "Justin Jefferson", team: "Minnesota Vikings", role: "WR" },
    { name: "Tyreek Hill", team: "Miami Dolphins", role: "WR" },
    { name: "Ja'Marr Chase", team: "Cincinnati Bengals", role: "WR" },
    { name: "Amon-Ra St. Brown", team: "Detroit Lions", role: "WR" },
    { name: "CeeDee Lamb", team: "Dallas Cowboys", role: "WR" },
    { name: "Travis Kelce", team: "Kansas City Chiefs", role: "TE" },
    { name: "George Kittle", team: "San Francisco 49ers", role: "TE" },
    { name: "Mark Andrews", team: "Baltimore Ravens", role: "TE" },
    { name: "T.J. Hockenson", team: "Minnesota Vikings", role: "TE" },
    { name: "Sam LaPorta", team: "Detroit Lions", role: "TE" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Player Name</th>
          <th>Team</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td>
            <td>{player.team}</td>
            <td>{player.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OffensivePlayersTable;