"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getUsers } from "@/store/slices/userSlice";
import { getVistor } from "@/store/slices/vistorSlice";

const UserData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getVistor());
  }, [dispatch]);

  return null;
};

export default UserData;
