import React from "react";
import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterPhoneStep.module.scss";
import Button from "../../Button";
import Axios from "../../../core/axios";
import { useRouter } from "next/router";

export const EnterCodeStep = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [codes, setCodes] = React.useState([]);
  const nextDisabled = codes.some((v) => !v) || codes.length < 4;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute("id")) - 1;
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await Axios.get("/todos");
      router.push("/rooms");
    } catch (error) {
      alert("Шибка при активации");
    }
  };

  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo
            icon="/static/numbers.png"
            title="Enter your activate code"
          />
          <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
            <div className={styles.codeInput}>
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index)}
                  onChange={handleChangeInput}
                  value={code}
                />
              ))}
            </div>
            <Button onClick={onSubmit} disabled={nextDisabled}>
              Next
              <img className="d-ib ml-10" src="/static/arrow.svg" />
            </Button>
          </WhiteBlock>
        </>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}
    </div>
  );
};
