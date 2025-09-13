import React from 'react'
import Form from 'next/form'
import { SearchFormReset } from './SearchFormReset'

const SearchForm = ({query}: {query?: "string"}) => {

  
    return (
        <Form action='/' className="form">
            <input type="text" name="query"   placeholder='search startups' />

            <div>

                {query ? <SearchFormReset /> : null }

                <button type="submit">search</button>
                
            </div>
        </Form>
    )
}

export default SearchForm