import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: (prev, args, ctx) => {
    // access control
    isAuth('readRoomId', ctx)

    return 'TODO'
  },
}
