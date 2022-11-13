export function handleOrder(inputArr, order, date) {
  let outputArr = [...inputArr];

  if (order !== "Default") {
    switch (order) {
      case "Ascending":
        return outputArr.sort((a, b) => a.name.localeCompare(b.name));
      case "Descending":
        return outputArr.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return outputArr;
    }
  } else if (date !== "Default") {
    switch (date) {
      case "Ascending":
        return outputArr.sort((a, b) => {
          let aDate = Date.now(a.createdAt);
          let bDate = Date.now(b.createdAt);

          return aDate - bDate;
        });
      case "Descending":
        return outputArr.sort((a, b) => {
          let aDate = Date.now(a.createdAt);
          let bDate = Date.now(b.createdAt);

          return bDate - aDate;
        });

      default:
        return outputArr;
    }
  }

  return outputArr;
}

export function handleCategory(templates, category) {
  let templateArr = templates?.ids.map((id) => templates.entities[id]);

  if (category !== "All") {
    templateArr = templateArr.filter((template) =>
      template.category.includes(category)
    );
  }

  return templateArr;
}
