import { Column, Entity, Index } from "typeorm";

@Index("code_num", ["code", "num1", "num2"], {})
@Index("sorivu_num", ["code", "num1", "num2", "sorivuNum"], {})
@Entity("board_soriview_event", { schema: "makeshop" })
export class BoardSoriviewEvent {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { name: "num2", length: 7 })
  num2: string;

  @Column("int", { name: "sorivu_num", default: () => "'0'" })
  sorivuNum: number;

  @Column("int", { name: "event_icon_s", default: () => "'0'" })
  eventIconS: number;

  @Column("int", { name: "event_icon_e", default: () => "'0'" })
  eventIconE: number;

  @Column("varchar", { name: "event_product", length: 255 })
  eventProduct: string;

  @Column("varchar", { name: "event_sponsor", nullable: true, length: 255 })
  eventSponsor: string | null;
}
