export function reportLines(aCustomer) {
  const lines: any = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}
