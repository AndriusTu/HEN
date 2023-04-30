using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hen.DAL.Entities
{
    public class ParcelStatusGroupEntity
    {
        public Guid ParcelId { get; set; }
        public ParcelEntity? Parcel { get; set; }
        public Guid StatusId { get; set; }
        public ParcelStatusEntity? Status { get; set; }
    }
}
