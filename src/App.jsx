import SimpleTable from "./components/SimpleTable";
import data from "./MOCK_DATA.json";
import dayjs from "dayjs";

function App() {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "My ID",
    },
    /* {
      header: "Name and Last Name",
      accessorFn: (row) => `${row.name} ${row.lastname}`,
    },
    {
      header: "Complete Names",
      columns: [
        {
          header: "Name",
          accessorKey: "name",
          footer: "My name",
        },
        {
          header: "Last name",
          accessorKey: "lastname",
          footer: "My last name",
        },
      ],
    }, */
    {
      header: "Name",
      accessorKey: "name",
      footer: "My name",
    },
    {
      header: "Last name",
      accessorKey: "lastname",
      footer: "My last name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "My email",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "My country",
    },
    {
      header: "Day of Birth",
      accessorKey: "dateOfBirth",
      footer: "My day of birth",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];

  return (
    <div>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
}

export default App;
