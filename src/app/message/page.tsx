import GetMessage from "@/lib/GetMessage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Message",
  description: "list of messages",
};

const Message = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { pass } = await searchParams;
  let mess = false;
  if (process.env.SEARCHPASS && pass === process.env.SEARCHPASS) {
    mess = true;
  }
  const data = mess ? await GetMessage() : [];
  // console.log(data);
  ////////////////////////////////
/*   const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  })
  
  const DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
  ]
  
  function formatTimeAgo(date) {
    let duration = (date - new Date()) / 1000
  
    for (let i = 0; i < DIVISIONS.length; i++) {
      const division = DIVISIONS[i]
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name)
      }
      duration /= division.amount
    }
  } */

  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-white">
        MESSAGES
      </h1>
      {!mess && <h1 className="h-96 text-center pt-10">Hello There!!!</h1>}
      {mess &&
        data.map((item) => {
          // const date = item.createdAt.toDateString()
          const date = new Date(item.createdAt).toDateString();
          // const datee = new Intl.RelativeTimeFormat(undefined, {style: 'narrow'})
          // console.log(datee.format(1, 'month'));
          // console.log(formatTimeAgo(new Date(item.createdAt)));
          return (
            <div
              className="block m-5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              key={item._id}
            >
              <h5 className="mb-2 text-md text-center font-normal tracking-tight text-gray-900 dark:text-white">
                Date: {date}
              </h5>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Name: {item.name}
              </h5>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Company: {item.company && item.company}
              </h5>
              <h5 className="mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Email: {item.email}
              </h5>
              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Message
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.message}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Message;
