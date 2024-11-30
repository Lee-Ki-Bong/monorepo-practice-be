import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("neodesign_function_group", { schema: "makeshop" })
export class NeodesignFunctionGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "func_uid", unsigned: true })
  funcUid: number;

  @Column("varchar", { name: "func_title", length: 100 })
  funcTitle: string;

  @Column("mediumtext", { name: "func_keyword" })
  funcKeyword: string;

  @Column("varchar", { name: "tpl_group_ids_set", length: 200 })
  tplGroupIdsSet: string;

  @Column("varchar", { name: "func_description", nullable: true, length: 100 })
  funcDescription: string | null;

  @Column("datetime", {
    name: "func_insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  funcInsertDate: Date;

  @Column("datetime", {
    name: "func_modify_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  funcModifyDate: Date;
}
