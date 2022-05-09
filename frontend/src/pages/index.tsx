import React from 'react'
import { HeroTitle } from 'src/components/hero-title'
import { Wrapper } from 'src/components/wrapper'
import { useGetUsersQuery } from 'src/generated/graphql'
import DefaultLayout from 'src/layouts/default'

const IndexPage = () => {
  const { loading, data, error } = useGetUsersQuery()

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <DefaultLayout>
      <Wrapper>
        <HeroTitle />
      </Wrapper>
    </DefaultLayout>
  )
}

export default IndexPage
