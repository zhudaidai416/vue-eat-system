// CreateTree, // region树单元
// CreateBranch, // region分支单元
export const CreateTree = function (id, province, city, area, hasChildren) {
  this.id = id
  this.province = province
  this.city = city
  this.area = area
  this.hasChildren = hasChildren
}

export const CreateBranch_city = function (id, province, city, area) {
  this.id = id
  this.province = province
  this.city = city
  this.area = area
  this.hasChildren = false
}

export const CreateBranch_area = function (name, check) {
  this.name = name
  this.check = check
}
