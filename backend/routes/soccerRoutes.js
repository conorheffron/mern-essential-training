import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerController.js'

const routes = (app) => {
  app.route('/players').get(getPlayers).post(addNewPlayer)

  app.route('/player/:id').get(getPlayerWithId).put(updatePlayer).delete(deletePlayer)
}

export default routes