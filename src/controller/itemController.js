const { checkItem } = require("../utils")
const { handleResponseSuccess, handleResponseError } = require("../utils/responses.js")

const items = [
  { id: 1, name: 'item 1', description: 'item 1 description' },
  { id: 2, name: 'item 2', description: 'item 2 description' },
  { id: 3, name: 'item 3', description: 'item 3 description' },
  { id: 4, name: 'item 4', description: 'item 4 description' },
  { id: 5, name: 'item 5', description: 'item 5 description' },
  { id: 6, name: 'item 6', description: 'item 6 description' },
  { id: 7, name: 'item 7', description: 'item 7 description' },
  { id: 8, name: 'item 8', description: 'item 8 description' },
  { id: 9, name: 'item 9', description: 'item 9 description' },
  { id: 10, name: 'item 10', description: 'item 10 description' },
  { id: 11, name: 'item 11', description: 'item 11 description' },
  { id: 12, name: 'item 12', description: 'item 12 description' },
  { id: 13, name: 'item 13', description: 'item 13 description' },
]

const getItems = (req, res) => {
  handleResponseSuccess(res, 200, "Get items successfully", { items })
}

const getItemById = (req, res) => {
  const { id } = req.params
  const checkedItem = checkItem(items, id)
  if (!checkItem) {
    handleResponseError(res, 404, "Item not found")
    return
  }
}




