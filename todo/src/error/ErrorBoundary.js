import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ErrorFallback from "./ErrorFallback";




const ErrorBoundary = (props) => {
  const { children } = props;
  const { error } = useSelector((state) => state.share);

  return error ? <ErrorFallback error={error} /> : children;
};
export default ErrorBoundary;