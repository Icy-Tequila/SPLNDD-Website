"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

// -------------------
// Inline type
// -------------------
type Hoodie = {
  id: number;
  name: string;
  price: number;
  created_at: string;
};

// -------------------
// API functions
// -------------------
async function getHoodies(): Promise<Hoodie[]> {
  try {
    const res = await axios.get<{ data: Hoodie[] }>("/api/hoodies");
    return res.data.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.error || "Failed to fetch hoodies");
    }
    throw new Error("Unexpected error");
  }
}

async function addHoodie(hoodie: {
  name: string;
  price: number;
}): Promise<Hoodie[]> {
  try {
    const res = await axios.post<{ data: Hoodie[] }>("/api/hoodies", hoodie);
    return res.data.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.error || "Failed to add hoodie");
    }
    throw new Error("Unexpected error");
  }
}

// -------------------
// Inner UI Component
// -------------------
function HoodieContent() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const queryClient = useQueryClient();

  const {
    data: hoodies,
    isLoading,
    isError,
    error,
  } = useQuery<Hoodie[], Error>({
    queryKey: ["hoodies"],
    queryFn: getHoodies,
  });

  const mutation = useMutation<
    Hoodie[],
    Error,
    { name: string; price: number }
  >({
    mutationFn: addHoodie,
    onSuccess: () => {
      setName("");
      setPrice("");
      queryClient.invalidateQueries({ queryKey: ["hoodies"] });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  return (
    <div className="p-6 space-y-6 mt-20">
      {" "}
      {/* mt-20 = 5rem */}
      {/* Input Form */}
      <div className="flex gap-2">
        <Input
          placeholder="Hoodie name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button
          onClick={() => mutation.mutate({ name, price: parseInt(price, 10) })}
          disabled={mutation.isPending || !name || !price}
        >
          {mutation.isPending ? "Adding..." : "Add Hoodie"}
        </Button>
      </div>
      {/* Hoodie List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && <p>Loading hoodies...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}
        {hoodies?.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-muted-foreground">
              Added on {new Date(item.created_at).toLocaleDateString()}
            </p>
            <div className="mt-2 text-xl font-bold">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------
// Page Component
// -------------------
export default function HoodiePage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HoodieContent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
