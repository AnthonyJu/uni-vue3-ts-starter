type IndexPageOnLoadFunc = () => void
type IndexPageOnShowFunc = () => void

interface IndexPageScrollParams {
  top: number
  left: number
}
type IndexPageOnScrollFunc = (params: IndexPageScrollParams) => void
