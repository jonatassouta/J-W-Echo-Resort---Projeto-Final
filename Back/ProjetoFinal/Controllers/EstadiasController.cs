using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoFinal.Models;

namespace ProjetoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadiasController : ControllerBase
    {
        private readonly HotelariaContext _context;

        public EstadiasController(HotelariaContext context)
        {
            _context = context;
        }

        // GET: api/Estadias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estadia>>> GetEstadia()
        {
            return await _context.Estadia.ToListAsync();
        }

        // GET: api/Estadias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estadia>> GetEstadia(int id)
        {
            var estadia = await _context.Estadia.FindAsync(id);

            if (estadia == null)
            {
                return NotFound();
            }

            return estadia;
        }

        // PUT: api/Estadias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstadia(int id, Estadia estadia)
        {
            if (id != estadia.EstadiaID)
            {
                return BadRequest();
            }

            _context.Entry(estadia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstadiaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Estadias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Estadia>> PostEstadia(Estadia estadia)
        {
            _context.Estadia.Add(estadia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstadia", new { id = estadia.EstadiaID }, estadia);
        }

        // DELETE: api/Estadias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstadia(int id)
        {
            var estadia = await _context.Estadia.FindAsync(id);
            if (estadia == null)
            {
                return NotFound();
            }

            _context.Estadia.Remove(estadia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EstadiaExists(int id)
        {
            return _context.Estadia.Any(e => e.EstadiaID == id);
        }
    }
}
