"use server";

export const fetchapiuser = async () => {
  const res = await fetch("http://127.0.0.1:8000/users");
  const data = await res.json();

  return data;
};

export const fetchapiblogs = async () => {
  const res = await fetch("http://127.0.0.1:8000/blogs");
  const data = await res.json();

  return data;
};
