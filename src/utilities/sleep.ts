export default function sleep(time: number = 500) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}
