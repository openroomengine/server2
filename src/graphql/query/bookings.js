import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from 'graphql'

import Booking from '../booking'

export default {
  type: new GraphQLList(Booking),
  args: {
    after: {
      type: GraphQLID, // null means start from beginning
    },
    count: {
      type: GraphQLInt,
    },
  },
  resolve: (prev, args, ctx) => ['TODO'],
}
