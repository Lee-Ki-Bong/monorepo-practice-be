import { Column, Entity } from "typeorm";

@Entity("makeshop_common_func_tag", { schema: "makeshop" })
export class MakeshopCommonFuncTag {
  @Column("int", { primary: true, name: "idx", default: () => "'0'" })
  idx: number;

  @Column("int", { primary: true, name: "func_id", default: () => "'0'" })
  funcId: number;
}
