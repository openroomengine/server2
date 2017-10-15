import {
  GraphQLID,
} from 'graphql'

import isAuth from '../../helpers/isAuth.js'

export default {
  type: GraphQLID,
  resolve: (booking, args, ctx) => {
    // access control
    isAuth('readBookingId', ctx, booking.user)

    return booking.id
  },
}
