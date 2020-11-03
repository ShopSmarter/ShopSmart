Hi there and welcome to our App! We're hoping a group iterates on our project so
we thought we'd share with you some things that we learned with the benefit of
hindsight and wht would've liked to do if we'd had the time.

1. State Management Revamp
To be honest and upfront about it, our state management is a hot mess. Everything is
prop drilled and state is probably too complicated for native react and would benefit
from being converted to redux or context/hooks. The complexities of prop-drilling kept 
us from keeping our state as concise and modular as we'd have liked it. Here's how we
might've tried to structure our state for each store:

store : {
    isStoreSelected: true,
    storeSubtotal: 0,
    storeProductArray: [{food : price}]
} 

2. Query and DB Restructuring
Right now our tables are structured to have a table of food, connected to several different
store tables, which each connect back to a price table. We initially did this to try to
be dry with our data but in hindsight it isn't scalable as each price requires a separate
query, which isn't practical once you have more than a couple stores. If we were to do it
over, we'd probably experiment with giving each food its own table so that a single query
can return a price for every store.

3. Store Data
We just used dummy data for our testing and presentation. It would've been awesome to find
APIs or another way to get real data about grocery store prices.

4. Stretch Features
A few things we talked about but weren't able to implement:
- Logging in and authorization
- Saving shopping lists (tied to the aforementioned logging in)
- Adding data like new stores or food prices
- Only showing the item in the shopping list where it's the cheapest (ie if you 
were shopping at Ralphs and TJ's, it'd give you an optimal list of food to get at 
each place -- this would make the Let me see button much more useful as it would
just give you the overall cheapest place if you only wanted to drive to a signle store)

Thanks for reading!

And if you do decide to iterate on state, may god have mercy on your soul.
