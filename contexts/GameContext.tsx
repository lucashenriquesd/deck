import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

export const GameContext = createContext({});

// export const GameProvider = ({ children }: any) => {
//   const [game, setGame] = useState<any>(null);

//   return (
//     <GameContext.Provider value={{ game, setGame }}>
//       {children}
//     </GameContext.Provider>
//   );
// };