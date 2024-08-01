import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";

export function Greet() {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");
  async function submit() {
    let res: string = await invoke("greet", {
      name,
    });
	if(name.length == 0)
		res = "";
    setGreeting(res);
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          id="name"
          type="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") submit();
          }}
        />
        <Button type="button" onClick={submit}>
          Greet
        </Button>
      </div>
      <br />
      <p>{greeting}</p>
    </div>
  );
}
