import { INVALID_MOVE } from 'boardgame.io/core';
import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';
import { stringify } from 'querystring';

export function moveChosePriest(G: IG, ctx: Ctx, chosenGameID: number, me: number): IG | 'INVALID_MOVE' {
    if (G.mayorID == chosenGameID) {
        return INVALID_MOVE
    }
    if (G.deadIDs.includes(chosenGameID)) {
        return INVALID_MOVE
    }

    if (G.lastPriestID == chosenGameID){
        return INVALID_MOVE
    }

    if (G.lastMayorID == chosenGameID && ctx.numPlayers > 5){
        return INVALID_MOVE
    }

    return {
        ...G,
        voting: true,
        priestID: chosenGameID,
        log: [...G.log, "Player " + me.toString() + " moveChosePriest " + chosenGameID.toString()]
    }
}

export function moveValidTest(G: IG, ctx: Ctx, me: number): IG | 'INVALID_MOVE' {
    return {
        ...G,
        log: [...G.log, "Player " + me.toString() + " moveValidTest "]
    }
}