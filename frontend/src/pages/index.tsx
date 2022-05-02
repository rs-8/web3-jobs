import {useGetUsersQuery} from 'src/generated/graphql'
import DefaultLayout from 'src/layouts/default'
import mapDataToViewExample from 'src/presentation/mappers/mapDataToViewExample'

const testData = [
  {
    id: '1',
    title: 'test',
    value: 2,
  },
  {
    id: '2',
    title: 'test2',
    value: 4,
  },
]

const newTestData = testData.map(mapDataToViewExample)

const IndexPage = () => {
  const {loading, data, error} = useGetUsersQuery()

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <DefaultLayout>
      index page
      {data?.users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </DefaultLayout>
  )
}

export default IndexPage
