import { useState } from "react";
import NestedCheckbox from "./NestedCheckbox";

const initialData = [
  {
    label: "foo",
    checked: true,
    children: [],
  },
  {
    label: "bar",
    checked: false,
    children: [],
  },
  {
    label: "foobar",
    checked: false,
    children: [
      {
        label: "hello",
        checked: false,
        children: [],
      },
      {
        label: "hi",
        checked: false,
        children: [],
      },
      {
        label: "greetings",
        checked: false,
        children: [
          {
            label: "tom",
            checked: false,
            children: [],
          },
        ],
      },
    ],
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const updateCheckbox = (label, checked, nodes) => {
    return nodes.map((node) => {
      if (node.label === label) {
        return {
          ...node,
          checked,
          children: updateAllChildren(node.children, checked),
        };
      } else {
        return {
          ...node,
          children: updateCheckbox(label, checked, node.children),
        };
      }
    });
  };

  const updateAllChildren = (children, checked) => {
    return children.map((child) => ({
      ...child,
      checked,
      children: updateAllChildren(child.children, checked),
    }));
  };

  const handleCheck = (label, checked) => {
    const updated = updateCheckbox(label, checked, data);
    setData(updated);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
        Nested Checkbox Tree
      </h2>
      <div className="mt-4">
        {data.map((item) => (
          <NestedCheckbox key={item.label} node={item} onCheck={handleCheck} />
        ))}
      </div>
    </div>
  );
}

export default App;
