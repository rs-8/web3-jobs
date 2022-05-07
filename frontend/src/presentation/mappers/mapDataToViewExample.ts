import { Example } from 'src/domain/models/Example'
import ViewExampleModel from 'src/presentation/models/ViewExample'

const mapDataToViewExample = (data: Example): ViewExampleModel => ({
  title: data.title,
  value: data.value,
})

export default mapDataToViewExample
