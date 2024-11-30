import { Column, Entity } from "typeorm";

@Entity("heatmap_service", { schema: "makeshop" })
export class HeatmapService {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "hm_idx",
    unsigned: true,
    default: () => "'0'",
  })
  hmIdx: number;

  @Column("varchar", { primary: true, name: "hm_url", length: 255 })
  hmUrl: string;

  @Column("char", { name: "hm_stat", nullable: true, length: 1 })
  hmStat: string | null;
}
