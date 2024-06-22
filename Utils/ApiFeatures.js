class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query; // this property is available throughout the class
    this.queryStr = queryStr;
  }
  filter() {
    // this.query.find(this.queryStr);

    this.query = this.query.find(this.queryStr);

    return this; // here this pointing to the current object
  }
  sort() {
    console.log("Checking query string in sort", this.queryStr);
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }
  limitFields() {
    const fieldsby = this.queryStr.fields.split(",").join(" ");
    this.query = this.query.select(fieldsby);
    return this;
  }
  paginate() {
    const page = this.queryStr.page * 1 || 1;
    const limit = this.queryStr.limit * 1 || 10;

    //page1: 1-10 2: 11-20 3: 21-30 4: 31-40

    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = ApiFeatures;
