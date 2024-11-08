const initState = {
        search: '',
        status: 'All',
        priority: [],
};

const filtersReducer = (state = initState, action) => {
    console.log({state,action});
    switch(action.type) {
            case 'filters/searchFilterChange':
                return {
                        ...state,
                        search: action.payload
                    };

            case 'filters/statusFilterChange':
                return {
                    ...state,
                    status: action.payload
                };
            case 'filters/prioririesFilterChange':
                return {
                    ...state,
                    priorities: action.payload
                };
        default: {
            return state;
        }
    }
}

export default filtersReducer