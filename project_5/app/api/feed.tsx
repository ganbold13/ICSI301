import { data } from "../static/example_data";
const feed = data?.feed;

export default function Feed(req:any, res:any) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(feed));
  console.log(feed);
}