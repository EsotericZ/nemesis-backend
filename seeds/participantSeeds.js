const { Participant } = require('../models');

const participantData = [
    {
        id: 3001,
        ProfileId: 2001,
        TournamentId: 3001,
        DivisionId: 5001,
    },
    {
        id: 3101,
        ProfileId: 2001,
        TournamentId: 3001,
        DivisionId: 5004,
    },
    {
        id: 3002,
        ProfileId: 2002,
        TournamentId: 3001,
        DivisionId: 5004,
    },
    {
        id: 3003,
        ProfileId: 2003,
        TournamentId: 3001,
        DivisionId: 5001,
    },
    {
        id: 3004,
        ProfileId: 2004,
        TournamentId: 3001,
        DivisionId: 5001,
    },
    {
        id: 3104,
        ProfileId: 2004,
        TournamentId: 3001,
        DivisionId: 5004,
    },
]

const seedParticipants = () => Participant.bulkCreate(participantData);

module.exports = seedParticipants;