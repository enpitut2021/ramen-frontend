// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6YWbAhS5tQQRFkLE21F4kw
// Component: i0iE4QV40D
import * as React from "react";
import { useState, useEffect } from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: FMUrbbttkcp2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_myna_dapp.module.css"; // plasmic-import: 6YWbAhS5tQQRFkLE21F4kw/projectcss
import * as sty from "./PlasmicSend.module.css"; // plasmic-import: i0iE4QV40D/css

export type PlasmicSend__VariantMembers = {};

export type PlasmicSend__VariantsArgs = {};
type VariantPropType = keyof PlasmicSend__VariantsArgs;
export const PlasmicSend__VariantProps = new Array<VariantPropType>();

export type PlasmicSend__ArgsType = {};
type ArgPropType = keyof PlasmicSend__ArgsType;
export const PlasmicSend__ArgProps = new Array<ArgPropType>();

export type PlasmicSend__OverridesType = {
  root?: p.Flex<"div">;
  form?: p.Flex<"form">;
  button?: p.Flex<"button">;
  send2?: p.Flex<"div">;
  send?: p.Flex<"div">;
};

export interface DefaultSendProps {
  dataFetches: PlasmicSend__Fetches;
}






function PlasmicSend__RenderFunc(props: {
  variants: PlasmicSend__VariantsArgs;
  args: PlasmicSend__ArgsType;
  overrides: PlasmicSend__OverridesType;
  dataFetches?: PlasmicSend__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });
  




  // インターフェース
  type IData = {
    address: string,
    amount: number
  };
  // 初期データ
  const initialData: IData = {
    address: '',
    amount: 0,
  };
  // データ
  const [data, setData] = useState<IData>(initialData);
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  }

  function hoge():void{
    console.log(data.address);
    console.log(data.amount);
  }







  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__qDBwF)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__hr4Kh
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "送金する"
                : "送金する"}
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__znWd7)}>
            <div className={classNames(defaultcss.all, sty.freeBox__k8U6)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(defaultcss.all, sty.freeBox__hpOsG)}>
                  <form
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    className={classNames(defaultcss.all, sty.form)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__pUiM
                      )}
                    >
                      {"送金先アドレス"}
                    </div>

                    <input
                      className={classNames(
                        defaultcss.input,
                        sty.textbox__qyus3
                      )}
                      placeholder={"Address" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={data.address}
                      name="address"
                      onChange={handleChangeInput}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__h4PpX
                      )}
                    >
                      {"送金する金額"}
                    </div>

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__gEgbm)}
                    >
                      <input
                        className={classNames(
                          defaultcss.input,
                          sty.textbox__o5Fvv
                        )}
                        placeholder={"Amount" as const}
                        size={1 as const}
                        type={"text" as const}
                        value={data.amount}
                        name="amount"
                        onChange={handleChangeInput}
                      />

                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__xtssR
                        )}
                      >
                        {"ETH"}
                      </div>
                    </div>

                    <button
                      type="button"
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames(defaultcss.button, sty.button)}
                      onClick={async () => hoge()}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__jy8Eq
                        )}
                      >
                        {"Send"}
                      </div>
                    </button>
                  </form>
                </div>
              ) : null}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__av8Qz)}>
              <div className={classNames(defaultcss.all, sty.freeBox__isM1R)}>
                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link__ckmke)}
                  component={Link}
                  href={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? ("/balance" as const)
                      : ("/balance" as const)
                  }
                  platform={"nextjs"}
                >
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__q8JZb)}
                    role={"img"}
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "/plasmic/myna_dapp/images/receivepng.png"
                        : "/plasmic/myna_dapp/images/homepng.png"
                    }
                  />

                  <div
                    data-plasmic-name={"send2"}
                    data-plasmic-override={overrides.send2}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.send2
                    )}
                  >
                    {"ホーム"}
                  </div>
                </p.PlasmicLink>
              </div>

              <div className={classNames(defaultcss.all, sty.freeBox__qtSe)}>
                <p.PlasmicLink
                  className={classNames(defaultcss.all, sty.link__py3Wf)}
                  component={Link}
                  href={"/receive" as const}
                  platform={"nextjs"}
                >
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__sNvcE)}
                    role={"img"}
                    src={"/plasmic/myna_dapp/images/receivepng.png"}
                  />

                  <div
                    data-plasmic-name={"send"}
                    data-plasmic-override={overrides.send}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.send
                    )}
                  >
                    {"受取"}
                  </div>
                </p.PlasmicLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "form", "button", "send2", "send"],
  form: ["form", "button"],
  button: ["button"],
  send2: ["send2"],
  send: ["send"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: "form";
  button: "button";
  send2: "div";
  send: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSend__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSend__VariantsArgs;
    args?: PlasmicSend__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSend__Fetches;
  } & Omit<PlasmicSend__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSend__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSend__ArgProps,
      internalVariantPropNames: PlasmicSend__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSend__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSend";
  } else {
    func.displayName = `PlasmicSend.${nodeName}`;
  }
  return func;
}

export const PlasmicSend = Object.assign(
  // Top-level PlasmicSend renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    send2: makeNodeComponent("send2"),
    send: makeNodeComponent("send"),

    // Metadata about props expected for PlasmicSend
    internalVariantProps: PlasmicSend__VariantProps,
    internalArgProps: PlasmicSend__ArgProps
  }
);

export default PlasmicSend;
/* prettier-ignore-end */
